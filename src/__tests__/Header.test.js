import React from "react";
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllUsers, channelsGet } from "../api/api-users";
import { mockUserResponse, mockChannelResponse } from "../api/mockUsersData";
import SearchBar from "../components/Header/SearchBar/SearchBar";

jest.mock("../api/api-users");


describe('Test for displaying search result', () => {

  it("trigger getAllUsers and getChannels api upon render of SearchBar", async () => {
  getAllUsers.mockImplementation(() => {
    return Promise.resolve(mockUserResponse);
  });

  channelsGet.mockImplementation(() => {
    return Promise.resolve(mockChannelResponse);
  });

  await act(async () => {
    render(<SearchBar />);
  });

  expect(getAllUsers).toHaveBeenCalledTimes(1);
  expect(channelsGet).toHaveBeenCalledTimes(1);
});

it("filter search results upon typing input in SearchBox", async () => {
  getAllUsers.mockImplementation(() => {
    return Promise.resolve(mockUserResponse);
  });

  channelsGet.mockImplementation(() => {
    return Promise.resolve(mockChannelResponse);
  });

  await act(async () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
  });

  const mockSearchInput = "user12@example.com";

  const searchBarInput = await waitFor(() =>
    screen.getByTitle("searchBar_input")
  );

  fireEvent.change(searchBarInput, {
    target: { value: mockSearchInput },
  });

  expect(searchBarInput).toBeInTheDocument();
});
  
})

