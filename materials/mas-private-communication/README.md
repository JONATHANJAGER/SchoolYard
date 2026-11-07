# MAS — optional private mesh communication lab

The curriculum has six **required** portfolio projects. MAS is an **additional optional seventh** project, with eight training weeks and separate instructor/student guides.

The Python program is a local, deterministic demonstration of device allowlist enforcement, synthetic telemetry and isolated decoy message handling. It **does not transmit real messages**, enforce true cryptographic authentication or provide deployable encryption. Both code and logs are synthetic and isolated; do not use for real private communications.

Run `python3 mas_simulator.py` and `python3 -m unittest test_mas_simulator.py` from this folder. The simulator does not make network connections or open ports.
