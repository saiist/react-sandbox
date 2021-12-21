import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App.js スナップショット', () => {
  it('新規登録の場合', () => {
    const tree = renderer.create(<App newwer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('更新の場合', () => {
    const tree = renderer.create(<App newwer={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
