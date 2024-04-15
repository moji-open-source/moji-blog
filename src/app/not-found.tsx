export default function NotFound() {
  return (
    <div className="mb-20 h-[calc(100vh-12.5em-80px-29px)] flex justify-center">
      <div className="flex justify-center items-center">
        <h1
          className="next-error-h1"
          style={{
            display: 'inline-block',
            margin: '0px 20px 0px 0px',
            padding: '0px 23px 0px 0px',
            fontSize: '24px',
            fontWeight: 500,
            verticalAlign: 'top',
            lineHeight: '49px',
            borderRight: '1px solid rgba(255,255,255,.3)',
          }}
        >
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-sm font-normal ">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  )
}
