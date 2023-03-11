import { useState, useEffect } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import {GiHumanTarget} from 'react-icons/gi'
import {SiNike} from 'react-icons/si'
import {MdOutlinePersonalInjury} from 'react-icons/md'

import HeaderComponent from '../header/HeaderComponent';
import { ScrollArea } from '@mantine/core';
// import axios from 'axios'
import HomePage from '../../screens/indivivdual relationship amendment/HomePage';

function Tab_Stepper() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));



  return (
    <>
    <div >
        {/* <HeaderComponent data={allLovs} /> */}
    </div>
        <Stepper active={active} size={15} className="m-2" onStepClick={setActive} completedIcon={<SiNike />}>
            <Stepper.Step icon={<MdOutlinePersonalInjury size={18} />} description="Relation Info">
                  {/* <Individual_account_opening data={allLovs} /> */}
                  <HomePage/>
            </Stepper.Step>
            <Stepper.Step icon={<GiHumanTarget size={18} />} description="Address">
                {/* <Corporate_Bank data={allLovs}/> */}
            </Stepper.Step>
            <Stepper.Step icon={<GiHumanTarget size={18} />} description="Employment">
                {/* <Corporate_Relations data={allLovs} /> */}
            </Stepper.Step>
            <Stepper.Step icon={<GiHumanTarget size={18} />} description="Contact">
                {/* <Account_Details data={allLovs} onChange={handleOnChange} /> */}
            </Stepper.Step>
            <Stepper.Step icon={<GiHumanTarget size={18} />} description="Other Bank Details">
                {/* <Account_Mandate data={allLovs} /> */}
            </Stepper.Step>
            <Stepper.Completed>
             Completed, click back button to get to previous step
            </Stepper.Completed>
        </Stepper>

        <Group position="right" mt="xl" className='mr-2'>
            <button className='border p-1 px-2 rounded bg-slate-500 hover:bg-slate-700 hover:text-white' variant="default" onClick={prevStep}>Back</button>
            <button className='border p-1 px-2 rounded bg-slate-500 hover:bg-slate-700 hover:text-white' onClick={nextStep}>Next step</button>
        </Group>
    </>
  );
}

export default Tab_Stepper;