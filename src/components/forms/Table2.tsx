
type apiT = {
id: number,
title: string,
class: string,
date: string
}
async function Table2 (apiUrl: string){

    const res = await fetch(apiUrl)
    const data: apiT[] = await res.json()
    console.log(data)

    return (
        <ul>
            {
                data.map(
                    (item: apiT)=> <li key={item.id}>{item.title}</li>
                )
            }
        </ul>
    )

}

export default Table2