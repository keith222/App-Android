import React, { Component } from 'react';
import styled from 'styled-components/native';
import I18n from '../../locales';
import * as theme from '../../theme';

import iconChevronRightImg from '../../images/icon/iconChevronRight.png';

const Container = styled.View`
  width: 100%;
  border: 1px solid ${theme.modBorder};
  border-radius: 5px;
  padding-top: 12;
  padding-right: 16;
  padding-bottom: 12;
  padding-left: 16;
  margin-bottom: 16;
`;

const Title = styled.Text`
  color: ${theme.scheduleCardTypeColor};
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8;
  letter-spacing: 0.2px;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Message = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.3px;
  width: 80%;
`;

const TouchArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const MoreText = styled.Text`
  color: ${theme.scheduleCardTypeColor};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.3px;
`;

const RightArrow = styled.Image`
  width: 7;
  height: 12;
  margin-left: 8;
`;

export default class News extends Component {
  renderNews = () => {
    const { news, toNews } = this.props;

    if (!news.length) return;

    return (
      <Content>
        <Message>{news[0].description}</Message>
        <TouchArea onPress={toNews}>
          <MoreText>More</MoreText>
          <RightArrow source={iconChevronRightImg} />
        </TouchArea>
      </Content>
    );
  }

  render() {
    return (
      <Container>
        <Title>{I18n.t('news.title')}</Title>
        { this.renderNews() }
      </Container>
    );
  }
}