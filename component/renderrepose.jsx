export default function RenderRepose(props) {
    return(
        <>
    <div key = {props.id} className="father">
            <div className="space">
                <div className="part1-1">
                    <a href="#" >
                        {props.name}
                    </a>
                    <p>{props.type==false ? "public": "privet"}</p>
                </div>
                <div className="part2-2">
                    <button type="button" class="btn  btn-secondary btn-sm">
                    <i class="fa fa-star-o"></i>
                        <p>Star</p>
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm">
                        <i class="fa fa-sort-down"></i>
                    </button>
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