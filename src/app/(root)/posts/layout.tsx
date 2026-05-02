export default function PostsLayout({ children }: React.PropsWithChildren) {
  return <>
    <main className="px-7 py-10 overflow-x-hidden">
      {children}
    </main>
  </>
}
