import { useEffect, useState } from "react"

const useService = serviceId => {
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `https://genius-car-service-by-saad.herokuapp.com/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [serviceId])

    return [service];

}

export default useService