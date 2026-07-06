import { act, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  beforeEach(() => {
    document.documentElement.className = "";
    localStorage.clear();
  });

  it("switches portrait based on the active theme class", async () => {
    act(() => {
      document.documentElement.classList.add("dark");
    });

    render(<Hero />);

    const portrait = screen.getAllByAltText(/roshan/i)[0];
    expect(portrait.getAttribute("src")).toContain("edited1");

    act(() => {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    });

    await waitFor(() => {
      const updatedPortrait = screen.getAllByAltText(/roshan/i)[0];
      expect(updatedPortrait.getAttribute("src")).toContain("version%20red");
    });
  });
});
