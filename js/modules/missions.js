export const getAllMissions = async() => {
    var formdata = new Formdata()
    var requestOptions ={
        method: 'Get',
        redirect: 'follow'
    }
    let res =await fetch("https://api.spacexdata.com/v4/crew")
    let data = await res.json()
    return data
}
console.log(data)