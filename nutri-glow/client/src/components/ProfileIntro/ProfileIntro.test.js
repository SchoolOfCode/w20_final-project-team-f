
import { render, screen } from '@testing-library/react';
import ProfileIntro from '../ProfileIntro/ProfileIntro'



it("should render signup form", () => {
    render(<ProfileIntro />);
    const profileIntroElement = screen.getByTestId('test-1');
    expect(profileIntroElement).toBeInTheDocument();

})



// How are you today?