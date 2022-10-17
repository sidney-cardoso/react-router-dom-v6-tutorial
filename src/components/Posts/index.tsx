import { Outlet, useParams, useSearchParams } from "react-router-dom"

export const Posts = () => {
    const { id } = useParams()
    const [qs] = useSearchParams()
    
    return (
        <div>
            <h1>Post</h1>
            <h2>{`Param: ${id}`}</h2> 
            <h2>{`QueryString: ${qs.get('page')}`}</h2>
            <Outlet />
        </div>
    )
}