import { act, fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'
import { withTranslation } from 'react-i18next'
import { Sidebar } from 'widgets/Sidebar'

describe('sidebar', () => {
    test('test one', () => {
        // const SidebarWithTranslation = withTranslation()(Sidebar)
        renderWithTranslation(<Sidebar />)
        screen.debug()

        // act(() => {
        //     screen.getByText('перевод').click()

        // })

        fireEvent.click(screen.getByText('перевод'))

        screen.debug()

    })
})