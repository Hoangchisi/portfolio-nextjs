function Projects(){
    return(
        <>
            <div id="projects">
                <div className="container">
                    <h1 className="sub_title">Projects</h1>
                    <div className="proj_list">
                        <div className="proj">
                            <img src="img/proj_1.png"/>
                            <div className="layer">
                                <h3>Elevator Model</h3>
                                <p>Decriptions should be here. ¯\_(ツ)_/¯</p>
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="proj">
                            <img src="img/proj_2.png"/>
                            <div className="layer">
                                <h3>Space Invaders</h3>
                                <p>Decriptions should be here. ¯\_(ツ)_/¯</p>
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="proj">
                            <img src="img/proj_3.png"/>
                            <div className="layer">
                                <h3>Cardiovascular disease Predict</h3>
                                <p>Decriptions should be here. ¯\_(ツ)_/¯</p>
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="" className="btn">
                        See more
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects