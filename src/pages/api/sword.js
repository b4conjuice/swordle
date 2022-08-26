const fetcher = url => fetch(url).then(res => res.json())

export default async function (req, res) {
  const data = await fetcher('https://notes.niel.to/api/sword/dt')
  res.send(data)
}
