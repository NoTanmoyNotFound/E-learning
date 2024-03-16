import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import "./Mentorship.css";
import data from "./datas"

const Mentorship = () => {
    const [expandedItem, setExpandedItem] = useState(0);

    const handleAccordionChange = (uuid) => {
        setExpandedItem(uuid);
    };

    return (
        <section className="m-wrapper">
            <div className="paddings innerWidth flexCenter m-container">
                {/* left side -------------------- */}
                <div className="m-left">
                    <div className="image-container">
                    </div>
                </div>

                {/* right side 'Saklin'--------------------- */}
                <div className="flexColStart m-right">


                        <span className='orangeText'>Mentors</span>
                        <span className='primaryText'>career Mentorship</span>
                        <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur<br /> aliquam molestias! Amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quo omnis impedit, maiores minima sapiente excepturi Lorem</span>


                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[expandedItem]}
                        onChange={handleAccordionChange}
                    >
                        {data.map((item, i) => (
                            <AccordionItem className={`accordionItem ${expandedItem === i ? 'expanded' : 'collapsed'}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.details}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default Mentorship;
