import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GradeTest from '../GradeTest';

describe('GradeTest Unit Tests', () => {

    const MockGradeTest = ({test_id}) => 
        render(
        <MemoryRouter initialEntries={[`/gradeTest/${test_id}`]}>
            <Routes>
                <Route path='/gradeTest/:test_id'>
                    <GradeTest/>
                </Route>
            </Routes>
        </MemoryRouter>
        );

    it('should render question answer form', async () => {
        // const {findAllByTestId} = MockGradeTest({test_id: 30});
        // const questions = await waitForElement(() => findAllByTestId('QuestionAnswer'));
        // console.log(questions)
    });

})