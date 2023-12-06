export default function RenderRepose(props) {
    return(
        <>
    <div className="father">
            <div className="space">
                <div className="part1-1">
                    <a href="#" >
                        {props.name}
                    </a>
                    <p>{props.type==false ? "public": "privet"}</p>
                </div>
                <div className="part2-2">
                    <button type="button" class="btn  btn-secondary btn-sm"><i class="bi paddingI bi-star"></i> star</button>
                    <button type="button" class="btn btn-secondary btn-sm"><i class="bi bi-caret-down"></i></button>
                </div>

            </div>   
            <div className="type">
                <div className="part1-1">
                    <div></div>
                    <p>{props.language}</p>


                    <p>{props.pushed_at}</p>
                </div>
                <div className="part2-2">
                    
                </div>
            </div>
        </div>
        </>
    )
}