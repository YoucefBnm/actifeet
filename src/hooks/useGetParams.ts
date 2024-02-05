import { useParams } from "react-router-dom";

export function useGetParams () {

    const params = useParams()

    return params
}