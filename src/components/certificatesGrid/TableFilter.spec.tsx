import { render, screen } from "../../utils/test-utils";
import TableFilter from "./TableFilter";

describe("TableFilter", () => {
  test("renders the table with correct data", async () => {
    render(<TableFilter />);

    // Assert that the table is rendered with the correct data
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(1); // Assuming there is only one row of data initially

    // You can add more assertions here to test the specific behavior of the component
  });
});