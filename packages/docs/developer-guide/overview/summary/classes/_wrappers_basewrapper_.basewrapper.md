# BaseWrapper

Base ContractWrapper

## Type parameters

▪ **T**: _Contract_

## Hierarchy

* **BaseWrapper**

  ↳ [AccountsWrapper](_wrappers_accounts_.accountswrapper.md)

  ↳ [AttestationsWrapper](_wrappers_attestations_.attestationswrapper.md)

  ↳ [BlockchainParametersWrapper](_wrappers_blockchainparameters_.blockchainparameterswrapper.md)

  ↳ [DoubleSigningSlasherWrapper](_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)

  ↳ [ValidatorsWrapper](_wrappers_validators_.validatorswrapper.md)

  ↳ [DowntimeSlasherWrapper](_wrappers_downtimeslasher_.downtimeslasherwrapper.md)

  ↳ [ElectionWrapper](_wrappers_election_.electionwrapper.md)

  ↳ [EscrowWrapper](_wrappers_escrow_.escrowwrapper.md)

  ↳ [ExchangeWrapper](_wrappers_exchange_.exchangewrapper.md)

  ↳ [FreezerWrapper](_wrappers_freezer_.freezerwrapper.md)

  ↳ [GasPriceMinimumWrapper](_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)

  ↳ [GoldTokenWrapper](_wrappers_goldtokenwrapper_.goldtokenwrapper.md)

  ↳ [GovernanceWrapper](_wrappers_governance_.governancewrapper.md)

  ↳ [LockedGoldWrapper](_wrappers_lockedgold_.lockedgoldwrapper.md)

  ↳ [MultiSigWrapper](_wrappers_multisig_.multisigwrapper.md)

  ↳ [ReserveWrapper](_wrappers_reserve_.reservewrapper.md)

  ↳ [SortedOraclesWrapper](_wrappers_sortedoracles_.sortedoracleswrapper.md)

  ↳ [StableTokenWrapper](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)

  ↳ [ReleaseGoldWrapper](_wrappers_releasegold_.releasegoldwrapper.md)

## Index

### Constructors

* [constructor](_wrappers_basewrapper_.basewrapper.md#constructor)

### Properties

* [events](_wrappers_basewrapper_.basewrapper.md#events)

### Accessors

* [address](_wrappers_basewrapper_.basewrapper.md#address)

## Constructors

### constructor

+ **new BaseWrapper**\(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: T\): [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:19_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L19)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |
| `contract` | T |

**Returns:** [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)

## Properties

### events

• **events**: _any_ = this.contract.events

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:33_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L33)

## Accessors

### address

• **get address**\(\): _string_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L23)

Contract address

**Returns:** _string_
