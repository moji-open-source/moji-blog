'use client'

import { Dialog, DialogOverlay } from '@/components/ui/dialog'
import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
  // Or a custom loading skeleton component
  return <Dialog defaultOpen={true}>
    <DialogOverlay />
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Spinner className="size-8" />
    </div>
  </Dialog>
}
