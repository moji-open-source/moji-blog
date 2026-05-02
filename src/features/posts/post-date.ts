const DEFAULT_LOCALE = 'en'
const DATE_ONLY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/
const LOCAL_DATE_TIME_PATTERN = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/

/**
 * Parses frontmatter dates without depending on a date library.
 * Date-only and local datetime strings are treated as local calendar values to avoid timezone drift.
 */
export function parsePostDate(date: Date | string | undefined) {
  if (!date) {
    return null
  }

  if (date instanceof Date) {
    return isValidDate(date) ? date : null
  }

  const value = date.trim()

  if (!value) {
    return null
  }

  const dateOnlyMatch = value.match(DATE_ONLY_PATTERN)

  if (dateOnlyMatch) {
    return createLocalDate(dateOnlyMatch)
  }

  const localDateTimeMatch = value.match(LOCAL_DATE_TIME_PATTERN)

  if (localDateTimeMatch) {
    return createLocalDate(localDateTimeMatch)
  }

  const parsed = new Date(value)

  return isValidDate(parsed) ? parsed : null
}

/**
 * Formats a post date using the platform locale formatter.
 */
export function formatPostDate(date: Date | string | undefined, locale = DEFAULT_LOCALE) {
  return formatDate(date, locale, {
    dateStyle: 'medium',
  })
}

/**
 * Formats a post date as a compact month-day label, for example "Aug 23".
 */
export function formatPostMonthDay(date: Date | string | undefined, locale = DEFAULT_LOCALE) {
  return formatDate(date, locale, {
    month: 'short',
    day: 'numeric',
  })
}

function formatDate(date: Date | string | undefined, locale: string, options: Intl.DateTimeFormatOptions) {
  const parsedDate = parsePostDate(date)

  if (!parsedDate) {
    return undefined
  }

  try {
    return new Intl.DateTimeFormat(locale, options).format(parsedDate)
  } catch {
    return new Intl.DateTimeFormat(DEFAULT_LOCALE, options).format(parsedDate)
  }
}

/**
 * Returns a machine-readable value for the HTML `time` element.
 */
export function getPostDateTimeAttribute(date: Date | string | undefined) {
  if (!date) {
    return undefined
  }

  if (date instanceof Date) {
    return isValidDate(date) ? date.toISOString() : undefined
  }

  const value = date.trim()

  if (DATE_ONLY_PATTERN.test(value)) {
    return value
  }

  if (LOCAL_DATE_TIME_PATTERN.test(value)) {
    return value.replace(' ', 'T')
  }

  return parsePostDate(value)?.toISOString()
}

/**
 * Returns a sortable timestamp, keeping undated or invalid posts at the end.
 */
export function getPostDateTimestamp(date: Date | string | undefined) {
  return parsePostDate(date)?.getTime() ?? 0
}

function createLocalDate(match: RegExpMatchArray) {
  const [, year, month, day, hour = '0', minute = '0', second = '0'] = match
  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  )

  if (
    date.getFullYear() !== Number(year)
    || date.getMonth() !== Number(month) - 1
    || date.getDate() !== Number(day)
    || date.getHours() !== Number(hour)
    || date.getMinutes() !== Number(minute)
    || date.getSeconds() !== Number(second)
  ) {
    return null
  }

  return date
}

function isValidDate(date: Date) {
  return !Number.isNaN(date.getTime())
}
