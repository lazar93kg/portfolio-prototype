import './globals.css'


export const metadata = {
  title: "Portfolio",
  description: "Portfolio by Lazar Jevtic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
