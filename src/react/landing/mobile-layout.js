import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import { withTranslation } from 'react-i18next';
import { HomepageHeading } from './landing';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  handleArrowDownClick = () => {
    scroller.scrollTo('section_one', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  render() {
    const { children, t } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a">{t('landing.menuStories')}</Menu.Item>
          <Menu.Item as="a">{t('landing.menuProfile')}</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    {t('landing.menuLogin')}
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    {t('landing.menuRegister')}
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile handleArrowDownClick={this.handleArrowDownClick} />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

export default withTranslation()(MobileContainer);
