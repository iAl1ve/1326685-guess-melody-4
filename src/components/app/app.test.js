import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`Test Render App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        errorsCount = {5}
        onWelcomeButtonClick = {() => {}}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
