
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
        <div className="flex justify-center items-center flex-col min-h-screen bg-slate-700">
            <div className="flex flex-col bg-slate-800 py-6 px-12 rounded-lg shadow-md">
                <h2 className="text-orange-500 text-2xl font-bold mb-4">Personal Info</h2>
                <div className="text-slate-200">
                    <p>Params : {params.name}</p>
                    <p>Age : {age?.age}</p>
                    <p>Gender : {gender?.gender}</p>
                    <p>Country : {country?.country[0]?.country_id}</p>
                </div>
            </div>
                <button className="text-slate-200 mt-4 underline underline-offset-4"><a href="/">Try Again</a></button>
        </div>
    )
}

export default page
