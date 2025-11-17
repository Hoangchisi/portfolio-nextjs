"use client";
import  { useState } from 'react';
function About() {
  const [activeTab, setActiveTab] = useState('skills');
  const handleTabClick = (tabname:string) => {
    setActiveTab(tabname);}
  return (
    <>
        <div id="about">
            <div className="container">
                <div className="row">
                    <div id="about_col_1">
                        <img src="img/avatar.png"/>
                    </div>
                    <div id="about_col_2">
                        <h1 className="sub_title">About me</h1>
                        <p>Decriptions should be here. ¯\_(ツ)_/¯</p>
                        <div className="tab_tilte">
                            <p
                            className={activeTab === 'skills' ? 'tab_links active_link' : 'tab_links'}
                            onClick={() => handleTabClick('skills')}>
                            Skills
                            </p>
                            <p
                            className={activeTab === 'education' ? 'tab_links active_link' : 'tab_links'}
                            onClick={() => handleTabClick('education')}>
                            Education
                            </p>
                            <p
                            className={activeTab === 'achievements' ? 'tab_links active_link' : 'tab_links'}
                            onClick={() => handleTabClick('achievements')}>
                            Achievements
                            </p>
                        </div>
                        <div className={activeTab === 'skills' ? "tab_contents active_tab" : "tab_contents"} id="skills">
                            <ul>
                                <li><span>C/C++</span><br/>OOP, Data structures, Embedded Programming</li>
                                <li><span>Python,MATLAB</span><br/>Machine Learning, Data Analysis</li>
                                <li><span>Web Development</span><br/>HTML, CSS, JavaScript</li>
                            </ul>
                        </div>

                        <div className={activeTab === 'education' ? "tab_contents active_tab" : "tab_contents"} id="education">
                            <ul>
                                <li><span>2022-2026: VNU HCM University of Science</span><br/>Major in Electronics Physics Technology & Informatics</li>
                                <li><span>2019-2022: Luong The Vinh highschool for the gifted</span><br/><br/> </li>
                                <li><span>2015-2019: Tran Dai Nghia secodary school</span><br/><br/></li>
                            </ul>
                        </div>

                        <div className={activeTab === 'achievements' ? "tab_contents active_tab" : "tab_contents"} id="achievements">
                            <ul>
                                <li><span>2024: Certificate of participate in SciVis Contest </span><br/><br/></li>
                                <li><span>2023: Certificate of Achievement "Student of 5 merits" </span><br/><br/></li>
                                <li><span>2023: Certificate in Basic IT Applications</span><br/><br/></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About