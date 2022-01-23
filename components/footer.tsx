export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 mt-14 text-xs text-center font-medium bg-purple-900 leading-6 text-purple-200">
      <p className="mb-2">Made with ❤️ in PA</p>
      <p>Copyright {year} Crimsonwolf LLC</p>
    </footer>
  )
}