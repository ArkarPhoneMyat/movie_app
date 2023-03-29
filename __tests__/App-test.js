import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { homeController, searchController } from '../src/controllers';
import renderer from 'react-test-renderer'
import {HomeScreen} from '../src/screens';

describe('App testing', () => {
    test('renderer', () => {
        const screen = renderer.create(<HomeScreen/>).toJSON();
        expect(screen).toMatchSnapshot();
    })
    test('get Movies Api', () => {
        homeController.getMovies(data => {
            expect(data.length).toHaveLength();
        })
    })
    test('get Movies Search Api', () => {
        searchController.getMoviesSearch('Man', data => {
            expect(data.length).toHaveLength();
        })
    })
});