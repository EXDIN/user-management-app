import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserForm from "./UserForm";
import { UserType } from "../../Types";

describe("UserForm component", () => {
    it("renders form correctly with default values", () => {
        render(<UserForm onSubmit={vi.fn()} />);

        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone number/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Add/i })
        ).toBeInTheDocument();
    });

    it("renders with initial data", () => {
        const initialData: UserType = {
            id: 1,
            name: "TEST 1",
            email: "test@test.com",
            phone: "123123123",
        };

        render(<UserForm initialData={initialData} onSubmit={vi.fn()} />);

        expect(screen.getByDisplayValue(initialData.name)).toBeInTheDocument();
        expect(screen.getByDisplayValue(initialData.email)).toBeInTheDocument();
        expect(screen.getByDisplayValue(initialData.phone)).toBeInTheDocument();
    });

    it("validates form fields and shows errors", async () => {
        render(<UserForm onSubmit={vi.fn()} />);

        fireEvent.click(screen.getByRole("button", { name: /Add/i }));

        await waitFor(() => {
            expect(
                screen.getByText(
                    /The name must contain at least 3 characters./i
                )
            ).toBeInTheDocument();
            expect(
                screen.getByText(/Invalid format email/i)
            ).toBeInTheDocument();
        });
    });

    it("submits the form with valid data", async () => {
        const mockOnSubmit = vi.fn();
        render(<UserForm onSubmit={mockOnSubmit} />);

        fireEvent.change(screen.getByLabelText(/Name/i), {
            target: { value: "TEST 2" },
        });
        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: "test2@test2.com" },
        });
        fireEvent.change(screen.getByLabelText(/Phone number/i), {
            target: { value: "456456456" },
        });

        fireEvent.click(screen.getByRole("button", { name: /Add/i }));

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalledWith({
                name: "TEST 2",
                email: "test2@test2.com",
                phone: "456456456",
            });
        });
    });
});
