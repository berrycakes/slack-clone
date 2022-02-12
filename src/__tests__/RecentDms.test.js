import React from "react";
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {  getRecentDms } from "../api/api-users";
import { mockRecentDmsResponse } from "../api/mockUsersData";
import RecentDms from "../components/Users/RecentDms";

jest.mock("../api/api-users");

it("tiggers recentDms api and display userlist upon render", async () => {
  getRecentDms.mockImplementation(() => {
    return Promise.resolve(mockRecentDmsResponse);
  });

  await act(async () => {
    render(
      <BrowserRouter>
        <RecentDms />
      </BrowserRouter>
    );
  });

  const user = await waitFor(() =>
  screen.getByText(mockRecentDmsResponse.data.data[0].uid
  )
)

   expect(getRecentDms).toHaveBeenCalledTimes(1);
   await waitFor(() => {
    expect(user).toBeInTheDocument()
  });

});
