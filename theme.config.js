export default {
  repository: 'https://github.com/SambaLim',
  titleSuffix: ' – FE Class',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">FE Class</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        for newbie
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Introduce FE for newbie" />
      <meta name="og:description" content="Introduce FE for newbie" />
      <meta name="og:title" content="SambaLim FE" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>MIT {new Date().getFullYear()} © Samba Lim.</>,
}
