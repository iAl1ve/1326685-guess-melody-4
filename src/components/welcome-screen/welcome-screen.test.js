import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

describe(`Test Render WelcomeScreen`, () => {
  it(`Should WelcomeScreen render correctly`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorsCount = {5}
        onWelcomeButtonClick = {() => {}}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
