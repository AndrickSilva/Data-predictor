
const getAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json();
}
const getGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json();
}
const getCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json();
}
interface Params {
    params: { name: string };
}

const page = async ({ params }: Params) => {
    const ageData = getAge(params.name)
    const genderData = getGender(params.name)
    const countryData = getCountry(params.name)

    const [age, gender, country] = await Promise.all([
        ageData,
        genderData,
        countryData
    ])

    return (
        <div>
            <p>params : {params.name}</p>
            <p>age : {age?.age}</p>
            <p>gender : {gender?.gender}</p>
            <p>country : {country?.country[0]?.country_id}</p>
        </div>
    )
}

export default page
