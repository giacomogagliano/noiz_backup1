// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.3.2 (finance/VestingWallet.sol)
pragma solidity ^0.8.0;

interface IZionVestingWallet {
  event ERC20Released(address token, uint256 amont);

  /**
   * @notice Getter per indirizzo del beneficiario.
   * @return Indirizzo del beneficiario.
   */
  function beneficiary() external view returns(address);

  /**
   * @notice Getter del timestamp dell'inizio del periodo di maturazione.
   * @return Timestamp dell'inizio del periodo di maturazione.
   */
  function start() external view returns(uint256);

  /**
   * @notice Getter della durata del tempo di maturazione.
   * @return Durata del tempo di maturazione in secondi.
   */
  function duration() external view returns(uint256);

  /**
   * @notice Quantità di token già rilasciati.
   * @return Token rilasciati in wei.
   */
  function released(address) external view returns(uint256);

  /**
   * @notice Rilascia i token maturati.
   * Emits a {TokenReleased} event.
   */
  function release(address) external;

  /**
   * @notice Calcola la somma di token gia maturati.
   */
  function vestedAmount(address, uint64) external view returns(uint256);
}