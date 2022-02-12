import { render, screen, waitFor, act, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { channelCreate, channelsGet, channelAddMember } from '../api/api-channels'
import { mockChannelCreateResponse, mockChannelDetailsResponse, mockAddMemberResponse, mockChannelErrors } from '../api/mockData'

jest.mock('../api/api-channels')

describe('Test for different channel functionalities', () => {
    test('trigger get channels API', async() => {
        let data
        channelsGet.mockImplementation(() => {
            data = Promise.resolve(mockChannelDetailsResponse)
            return data
        })
        channelsGet();
        expect(channelsGet).toHaveBeenCalledTimes(1);
        await expect(data).resolves.toHaveLength(3);
    })

    test('trigger create channel API', async() => {
        let data
        channelCreate.mockImplementation(() => {
            data = Promise.resolve(mockChannelCreateResponse)
            return data
        })
        channelCreate();
        expect(channelCreate).toHaveBeenCalledTimes(1);
        await expect(data).resolves.toBeTruthy();
    })

    test('trigger add member API', async() => {
        let data
        channelAddMember.mockImplementation(() => {
            data = Promise.resolve(mockAddMemberResponse)
            return data
        })
        channelAddMember();
        expect(channelAddMember).toHaveBeenCalledTimes(1);
        await expect(data).resolves.toHaveLength(2);
    })

    test('error get channels API', async() => {
        let data
        channelsGet.mockImplementation(() => {
            data = Promise.resolve(mockChannelErrors)
            return data
        })
        channelsGet();
        await expect(data).resolves.toBeFalsy();
    })

    test('error create channel API', async() => {
        let data
        channelCreate.mockImplementation(() => {
            data = Promise.resolve(mockChannelErrors)
            return data
        })
        channelCreate();
        await expect(data).resolves.toBeFalsy();
    })

    test('error add members API', async() => {
        let data
        channelAddMember.mockImplementation(() => {
            data = Promise.resolve(mockChannelErrors)
            return data
        })
        channelAddMember();
        await expect(data).resolves.toBeFalsy();
    })
})