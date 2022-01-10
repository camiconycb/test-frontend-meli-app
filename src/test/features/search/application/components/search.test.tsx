import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../../../App";



describe("App", () => {
  describe("Search component", () => {
    it("should display error message when query parameter is not entered", async () => {
      
      await act(async() => {
        render(<App />);
      });
  
      // const input = screen.getByTestId("input-search");
      // userEvent.type(input, "mesa"); // fail
  
      const button = screen.getByRole("button");
  
      await act(async() => {
        userEvent.click(button);
      })
  
    
      expect(await screen.findByText(/Ingrese parametro de busqueda/i)).toBeInTheDocument();
      

    });
  });
});
