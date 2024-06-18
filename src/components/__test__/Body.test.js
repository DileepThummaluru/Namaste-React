import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/ResDataMock.json";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search Res List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = await screen.findAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const textBox = screen.getByTestId("searchInput");

  fireEvent.change(textBox, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = await screen.findAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});
