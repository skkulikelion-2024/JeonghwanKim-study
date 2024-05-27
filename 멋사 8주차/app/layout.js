
export const metadata = {
  title: '%s | Next Movies',
  default : "...loading",
  description: 'best Framework',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation/>
      <body>{children}</body>
    </html>
  )
}
