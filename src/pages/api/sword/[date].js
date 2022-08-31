import fetcher from '@/lib/fetcher'

async function sword(req, res) {
  const {
    query: { date },
  } = req
  const data = await fetcher(`https://notes.niel.to/api/sword/dt/${date}`)
  res.send(data)
}

export default sword
