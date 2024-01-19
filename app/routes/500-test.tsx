export default function Test() {
    return (<>
    <h1>TEST PAGE</h1>
    </>)
}

export async function loader({request}) {

    throw new Error("something went wrong mate");

    return {test: "failed"}
}