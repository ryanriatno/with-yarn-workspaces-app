import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, getByText, fireEvent } from '@testing-library/react'
import Button from '../index'

describe('<Button /> test case', () => {
  describe('Blue button test case', () => {
    const buttonText = 'Blue button'
    const { container } = render(<Button color="black">{buttonText}</Button>)

    const linkElement = getByText(container, buttonText)

    test(`Render ${buttonText} correctly`, () => {
      expect(container).toMatchSnapshot()
    })

    test(`Have a text ${buttonText}`, () => {
      expect(linkElement).toBeInTheDocument
    })

    test(`${buttonText} clicked`, () => {
      const clicked = fireEvent.click(linkElement)
      expect(clicked).toBe(true)
    })
  })

  describe('White button test case', () => {
    const buttonText = 'White button'
    const { container } = render(<Button color="black">{buttonText}</Button>)

    const linkElement = getByText(container, buttonText)

    test(`Render ${buttonText} correctly`, () => {
      expect(container).toMatchSnapshot()
    })

    test(`Have a text ${buttonText}`, () => {
      expect(linkElement).toBeInTheDocument
    })

    test(`${buttonText} clicked`, () => {
      const clicked = fireEvent.click(linkElement)
      expect(clicked).toBe(true)
    })
  })

  describe('Black button test case', () => {
    const buttonText = 'Black button'
    const { container } = render(<Button color="black">{buttonText}</Button>)

    const linkElement = getByText(container, buttonText)

    test(`Render ${buttonText} correctly`, () => {
      expect(container).toMatchSnapshot()
    })

    test(`Have a text ${buttonText}`, () => {
      expect(linkElement).toBeInTheDocument
    })

    test(`${buttonText} clicked`, () => {
      const clicked = fireEvent.click(linkElement)
      expect(clicked).toBe(true)
    })
  })
})
