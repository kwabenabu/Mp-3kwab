import styled from 'styled-components'

const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
`

const Brand = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`

// Header-only; navigation lives in src/components/Nav.tsx

function Header() {
  return (
    <HeaderBar>
      <Brand>My App</Brand>
    </HeaderBar>
  )
}

export default Header
