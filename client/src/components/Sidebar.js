import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Contacts from "./Contacts";
import Converasions from "./Converasions";

const CONVERSATIONS_TAB = "conversation";
const CONTACTS_TAB = "contacts";

export default function Sidebar() {
  const [currentTab, setCurrentTab] = useState(CONVERSATIONS_TAB);
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      {/* // <div style={{ width: "250px" }} className="d-flex flex-column"> */}
      {/* return ( */}
      <Tab.Container activeKey={currentTab} onSelect={setCurrentTab}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_TAB}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_TAB}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_TAB}>
            <Converasions />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_TAB}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        {/* <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div> */}
        {/* <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button> */}
      </Tab.Container>
    </div>
  );
}
