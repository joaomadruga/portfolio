import React, { useEffect, useState } from 'react';
import BorderProjecttPage from '../../components/ProjectsPage/BorderProjectPage';
import CardProjectPage from '../../components/ProjectsPage/CardProjectPage';
import FrameProjectPage from '../../components/ProjectsPage/FrameProjectPage';
import ProjectPageContent from '../../components/ProjectsPage/ProjectPageContent';
import TextCard from '../../components/TextCard';
import Image from 'next/image';
import TextLinkWebsite from '../../components/ProjectsPage/TextLinkWebsite';
import TechnologiesDiv from '../../components/ProjectsPage/TechnologiesDiv';
import { useRouter } from 'next/router';
import PageSwitcher from '../../components/ProjectsPage/PageSwitcher';
import TechnologiesDivInside from '../../components/ProjectsPage/TechnologiesDivInside';
import 'animate.css';
import ProjectText from '../../components/ProjectsPage/ProjectText';
import Close from '../../components/ProjectsPage/Close';
import ProjectsLanguage from '../../components/ProjectsPage/ProjectsLanguage';
import { GetProjectsObject } from './constants';
import jsonTextPt from "../../public/texts-pt.json";

export default function Projects() {
    const router = useRouter();
    const [animation, setAnimation] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ value: 'pt', label: '🇧🇷' });
    const jsonTextPt = require('../../public/texts-pt.json');
    const jsonTextEn = require('../../public/texts-en.json');
    const [languageJSON, setLanguageJSON] = useState(jsonTextPt);
    const [projects, setProjects] = useState(GetProjectsObject(jsonTextPt));
    const ProjectsNames = ['carplit', 'awrengenharia', 'horadoservico', 'eva', 'myhome', 'clust', 'estaplit', 'article-medium']
    const [ActualProject, setActualProject] = useState('awrengenharia');
    async function getURL() {
        setAnimation(true)
        let ActualURL = window.location.href.split('?');
        if (ActualURL.length <= 1){
            await router.push('/projects?')
            getURL()
        }else{
            let i = 1
            var key = ActualURL[i].toLowerCase().trim()
            while (projects[key] == undefined) {
                i += 1;
                try {
                    key = ActualURL[i].toLowerCase().trim();
                }
                catch{
                    console.log('')
                }
                if (i == 10) {
                    key = 'carplit'
                    await router.push(`/projects?carplit`)
                    break
                }
            }
            setActualProject(key)
        }
    }
    useEffect(() => {
        getURL()
    }, [])

    useEffect(() => {
        if (selectedOption.value == 'pt'){
          setLanguageJSON(jsonTextPt);
          setProjects(GetProjectsObject(jsonTextPt));
        }else{
          setLanguageJSON(jsonTextEn);
          setProjects(GetProjectsObject(jsonTextEn));
        }
      }, [selectedOption])

    async function changeProject(nextOrBack){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
        document.getElementsByTagName('body')[0].style.width = '100vw'
        setAnimation(false)
        let j = 0;
        while (ProjectsNames[j] != ActualProject) {
            j += 1
        }
        nextOrBack == 'next' ? j += 1 : j -= 1
        j >= ProjectsNames.length ? j = 0 : ''
        j < 0 ? j = ProjectsNames.length - 1 : ''
        setTimeout(async () => {
            await router.push(`/projects?${ProjectsNames[j]}`)
            getURL()
        }, 1000);
    }
    async function exit(){
        setAnimation(false)
        setTimeout(async () => {
            await router.push('/')
        }, 1000);
        
    }
    return (
      <ProjectPageContent>
          <Close onClick={() => exit()}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00099 1.04373C1.64212 0.402798 2.51156 0.0427413 3.41811 0.0427413C4.32467 0.0427413 5.1941 0.402798 5.83523 1.04373L23.9312 19.1397L42.0271 1.04373C42.3425 0.717197 42.7197 0.456743 43.1368 0.277565C43.5539 0.0983865 44.0026 0.0040738 44.4565 0.000129084C44.9105 -0.00381563 45.3606 0.082687 45.7808 0.254589C46.201 0.426492 46.5827 0.680351 46.9037 1.00135C47.2247 1.32236 47.4786 1.70408 47.6505 2.12424C47.8224 2.54441 47.9089 2.9946 47.9049 3.44855C47.901 3.9025 47.8067 4.35112 47.6275 4.76823C47.4483 5.18534 47.1879 5.5626 46.8613 5.87797L28.7654 23.9739L46.8613 42.0698C47.4841 42.7146 47.8287 43.5782 47.8209 44.4746C47.8131 45.371 47.4536 46.2285 46.8197 46.8624C46.1858 47.4963 45.3283 47.8558 44.4319 47.8636C43.5355 47.8714 42.6719 47.5268 42.0271 46.9041L23.9312 28.8081L5.83523 46.9041C5.19043 47.5268 4.32682 47.8714 3.43041 47.8636C2.53401 47.8558 1.67652 47.4963 1.04264 46.8624C0.408756 46.2285 0.0492003 45.371 0.0414107 44.4746C0.0336212 43.5782 0.378221 42.7146 1.00099 42.0698L19.0969 23.9739L1.00099 5.87797C0.360057 5.23685 0 4.36741 0 3.46085C0 2.5543 0.360057 1.68486 1.00099 1.04373V1.04373Z" fill={projects[ActualProject].MainColor}/>
          </svg>

          </Close>

            <PageSwitcher 
            className={animation ? 'showSwitcherAnimation' : 'animate__animated animate__fadeOutRight'}
            Color={projects[ActualProject].MainColor} Right={'20px'} RightMobile={'0'} onClick={() => changeProject('next')}>
                <svg width="43" height="51" viewBox="0 0 43 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="switcher" d="M1.25001 2.55033L41 25.5L1.25001 48.4497L1.25001 2.55033Z" stroke="#00487E" strokeWidth="2"/>
                </svg>
            </PageSwitcher>
            <PageSwitcher 
            className={animation ? 'showSwitcherAnimation' : 'animate__animated animate__fadeOutLeft'}
            Color={projects[ActualProject].MainColor} Left={'20px'} LeftMobile={'0'} style={{transform: 'rotate(180deg)'}} onClick={() => changeProject('back')}>
                <svg width="43" height="51" viewBox="0 0 43 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="switcher" d="M1.25001 2.55033L41 25.5L1.25001 48.4497L1.25001 2.55033Z" stroke="#00487E" strokeWidth="2"/>
                </svg>
            </PageSwitcher>

            <CardProjectPage className={animation ? 'animate__animated animate__fadeInLeft': 'animate__animated animate__fadeOutLeft'} bgColor={projects[ActualProject].MainColor}>
                <TextCard color={'white'}>{projects[ActualProject].title}</TextCard>
            </CardProjectPage>
            <div style={{display: 'flex', width: '60vw', justifyContent: projects[ActualProject].flexBox, alignItems: 'center'}}>
            {projects[ActualProject].ImageURL.map(function(currentImage, index){
                    return (
                    <FrameProjectPage 
                    key={index}
                    className={animation ? 'showFrame': 'hideFrame'}
                    color={projects[ActualProject].MainColor}
                    >
                    <BorderProjecttPage className={animation ? 'showBorder': 'hideBorder'} color={projects[ActualProject].MainColor}/>
                    <div 
                    className={animation ? 'animate__animated animate__fadeIn animate__delay-1s' : 'animate__animated animate__fadeOut'}
                    style={{zIndex: -1, maxWidth: '100%',marginBottom: '-2px'}}
                    >
                        <Image src={currentImage.imagePath} width={currentImage.width} height={currentImage.height} quality={100} />
                    </div>
                    </FrameProjectPage>
                    )
                })}
            </div>
            <ProjectText 
            style={{textAlign: 'justify', width: projects[ActualProject].textWidth}}
            className={animation ? 'animate__animated animate__fadeIn animate__slow': 'animate__animated animate__fadeOut animate__slow'}
            >{projects[ActualProject].text}</ProjectText>
            <TextLinkWebsite 
            style={projects[ActualProject].isSite ? {} : {display: 'none'}}
            Color={projects[ActualProject].MainColor}
            href={projects[ActualProject].projectURL}
            className={animation ? 'animate__animated animate__fadeInUp': 'animate__animated animate__fadeOutDown'}
            target="_blank"
            >
                {projects[ActualProject].subtitle}
            </TextLinkWebsite>
            <TechnologiesDiv className={animation ? 'animate__animated animate__fadeInUp': 'animate__animated animate__fadeOutDown'}>
                <p style={{fontSize: '1.4rem'}}>{projects[ActualProject].techsText}</p>
                <TechnologiesDivInside>
                    {projects[ActualProject].Technologies.map(function(currentTec, index){
                        return (
                            <Image key={index} src={`/ProjectPageImages/${currentTec}.svg`} width={80} height={60} quality={100} />
                        )
                    })}
                </TechnologiesDivInside>
            </TechnologiesDiv>
            <ProjectsLanguage selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      </ProjectPageContent>
  )
}
