import React from 'react';
import { Card } from 'primereact/card';
import { RadioButton } from 'primereact/radiobutton';
import ParentComponent from './Parent';

const DepartureCityCard = () => {
  
    return (
        <div className="h-full w-48 flex flex-col items-center">
           <div className="Tables" style={{width: 781, height: 272, padding: 12, background: 'white', borderRadius: 12, border: '1px #E2E8F0 solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
  <div className="Column" style={{width: 162, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div className="Head" style={{width: 162, height: 40, position: 'relative', background: 'white'}}>
      <div className="SubTask" style={{width: 114, left: 24, top: 12, position: 'absolute', color: '#4A5568', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.60, wordWrap: 'break-word'}}>SUB TASK</div>
    </div>
    <div className="Row" style={{width: 162, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="SegunAdebayo" style={{width: 114, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>Segun Adebayo</div>
    </div>
    <div className="Row" style={{width: 162, height: 52, position: 'relative', background: 'white'}}>
      <div className="MarkChandler" style={{width: 114, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>Mark Chandler</div>
    </div>
    <div className="Row" style={{width: 162, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="LazarNikolov" style={{width: 114, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>Lazar Nikolov</div>
    </div>
    <div className="Row" style={{width: 162, height: 52, position: 'relative', background: 'white'}}>
      <div className="JavierAlaves" style={{width: 114, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>Javier Alaves</div>
    </div>
  </div>
  <div className="Details" style={{width: 211, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div className="Head" style={{width: 211, height: 40, position: 'relative', background: 'white'}}>
      <div className="Details" style={{width: 163, left: 24, top: 12, position: 'absolute', color: '#4A5568', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.60, wordWrap: 'break-word'}}>DETAILS</div>
    </div>
    <div className="Row" style={{width: 211, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="FounderOfChakraUi" style={{width: 163, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Founder of Chakra UI</div>
    </div>
    <div className="Row" style={{width: 211, height: 52, position: 'relative', background: 'white'}}>
      <div className="Developer" style={{width: 163, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Developer</div>
    </div>
    <div className="Row" style={{width: 211, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="Devrel" style={{width: 163, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>DevRel</div>
    </div>
    <div className="Row" style={{width: 211, height: 52, position: 'relative', background: 'white'}}>
      <div className="Designer" style={{width: 163, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Designer</div>
    </div>
  </div>
  <div className="Assignee" style={{width: 198, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div className="Head" style={{width: 198, height: 40, position: 'relative', background: 'white'}}>
      <div className="Assignee" style={{width: 150, left: 24, top: 12, position: 'absolute', color: '#4A5568', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.60, wordWrap: 'break-word'}}>ASSIGNEE</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="SageChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>sage@chakra-ui.com</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: 'white'}}>
      <div className="MarkChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>mark@chakra-ui.com</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="LazarChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>lazar@chakra-ui.com</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: 'white'}}>
      <div className="JaviChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>javi@chakra-ui.com</div>
    </div>
  </div>
  <div className="DueDate" style={{width: 198, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div className="Head" style={{width: 198, height: 40, position: 'relative', background: 'white'}}>
      <div className="DueDate" style={{width: 150, left: 24, top: 12, position: 'absolute', color: '#4A5568', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.60, wordWrap: 'break-word'}}>DUE DATE</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="SageChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>sage@chakra-ui.com</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: 'white'}}>
      <div className="MarkChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>mark@chakra-ui.com</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: '#EDF2F7'}}>
      <div className="LazarChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>lazar@chakra-ui.com</div>
    </div>
    <div className="Row" style={{width: 198, height: 52, position: 'relative', background: 'white'}}>
      <div className="JaviChakraUiCom" style={{width: 150, left: 24, top: 16, position: 'absolute', color: '#2D3748', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>javi@chakra-ui.com</div>
    </div>
  </div>
</div>

<div className="Modals" style={{width: 448, height: 172, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
  <div className="Modalcontent" style={{width: 448, height: 172, background: 'white', boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05)', borderRadius: 6, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
    <div className="Modalclosebutton" style={{width: 32, height: 32, left: 404, top: 8, position: 'absolute', borderRadius: 6}}>
      <div className="Icon" style={{width: 12, height: 12, left: 10, top: 10, position: 'absolute', background: '#2D3748'}}></div>
    </div>
    <div className="Modalheader" style={{alignSelf: 'stretch', paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
      <div className="Text" style={{color: '#2D3748', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>Delete user</div>
    </div>
    <div className="Modalbody" style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
      <div className="Text" style={{alignSelf: 'stretch', color: '#2D3748', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Are you sure? You can’t undo this action afterwards.</div>
    </div>
    <div className="Modalfooter" style={{alignSelf: 'stretch', height: 72, paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'flex'}}>
      <div className="Modalactions" style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
        <div className="Button" style={{width: 86, paddingLeft: 16, paddingRight: 16, background: '#EDF2F7', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
          <div className="Children" style={{color: '#1A202C', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>Cancel</div>
        </div>
        <div className="Button" style={{width: 83, paddingLeft: 16, paddingRight: 16, background: '#2563EB', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
          <div className="Children" style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>Delete</div>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
        
    );
};

export default DepartureCityCard;
