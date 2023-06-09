import React from "react";
import store from "../../state/store";
import { Provider } from "react-redux";
import { MOCK_QUIZ } from "../mocks/quiz";
import axios from "axios";
import App from "../../App";
import { vi } from "vitest";
import { render } from "@testing-library/react";

export function renderApp() {
  // stub axios.get to return mock quiz
  vi.spyOn(axios, "get").mockResolvedValue({ data: MOCK_QUIZ });

  // render App component
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
