import React, { useState } from 'react'
import { Switch } from 'react-native'
import { Container } from './styles'

export const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <Container>
      <Switch
        trackColor={{ false: '#767577', true: '#81ffa7' }}
        thumbColor={isEnabled ? '#51f54b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  )
}
