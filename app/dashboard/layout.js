export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <h1>Main heading</h1>
      {children}
    </section>
  )
}