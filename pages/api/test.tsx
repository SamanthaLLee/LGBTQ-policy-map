import axios from "axios"

export default async (req, res) => {
  const endpoint = `https://api.legiscan.com/?key=8dcb3de47fe70382df13df111e1b7d8e&op=search&state=NJ&query=LGBTQ`

  await axios
    .get(endpoint)
    .then(( data ) => {
      res.json({data})
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}