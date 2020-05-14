import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { setRetryVerificationWithForno } from 'src/account/actions'
import { WarningModal } from 'src/components/WarningModal'
import { Namespaces } from 'src/i18n'
import { cancelVerification } from 'src/identity/actions'
import { VerificationStatus } from 'src/identity/verification'
import { navigate, navigateHome } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import { toggleFornoMode } from 'src/web3/actions'
import Logger from 'src/utils/Logger'

interface Props {
  verificationStatus: VerificationStatus
  retryWithForno: boolean
  cancelVerification: typeof cancelVerification
  setRetryVerificationWithForno: typeof setRetryVerificationWithForno
  toggleFornoMode: typeof toggleFornoMode
}

export function VerificationFailedModal(props: Props) {
  const { t } = useTranslation(Namespaces.nuxVerification2)
  const [isDismissed, setIsDismissed] = React.useState(true)

  React.useEffect(() => {
    setIsDismissed(false)
  }, [setIsDismissed])

  const onDismiss = React.useCallback(() => {
    setIsDismissed(true)
  }, [setIsDismissed])

  const onSkip = React.useCallback(() => {
    props.cancelVerification()
    navigateHome()
  }, [props.cancelVerification])

  const onRetry = React.useCallback(() => {
    props.toggleFornoMode(true)
    props.setRetryVerificationWithForno(false) // Only prompt retry with forno once
    setIsDismissed(true)
    navigate(Screens.VerificationEducationScreen)
  }, [setIsDismissed, props.setRetryVerificationWithForno])

  const isVisible =
    (props.verificationStatus === VerificationStatus.Failed ||
      props.verificationStatus === VerificationStatus.RevealAttemptFailed) &&
    !isDismissed
  const allowEnterCodes = props.verificationStatus === VerificationStatus.RevealAttemptFailed

  Logger.debug(`Should show modal:${props.retryWithForno} `)
  return props.retryWithForno ? (
    // Retry verification with forno with option to skip verificaion
    <WarningModal
      isVisible={isVisible}
      header={t('retryWithFornoModal.header')}
      body1={t('retryWithFornoModal.body1')}
      body2={t('retryWithFornoModal.body2')}
      continueTitle={t('retryWithFornoModal.retryButton')}
      cancelTitle={t('education.skip')}
      onCancel={onSkip}
      onContinue={onRetry}
    />
  ) : allowEnterCodes ? (
    // Else skip verification
    <WarningModal
      isVisible={isVisible}
      header={t('failModal.header')}
      body1={t('failModal.body1')}
      body2={t('failModal.enterCodesBody')}
      continueTitle={t('education.skip')}
      cancelTitle={t('global:goBack')} // TODO may need to add text
      onCancel={onDismiss}
      onContinue={onSkip}
    />
  ) : (
    // Option to enter codes if reveal attempt failed
    <WarningModal
      isVisible={isVisible}
      header={t('failModal.header')}
      body1={t('failModal.body1')}
      body2={t('failModal.body2')}
      continueTitle={t('education.skip')}
      onContinue={onSkip}
    />
  )
}
